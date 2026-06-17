import os
import re
import requests
from playwright.sync_api import sync_playwright
import pypdf

KDP_DIR = os.path.dirname(os.path.abspath(__file__))
MD_PATH = os.path.join(KDP_DIR, "KDP_Smartfarm_Draft_v2.md")
HTML_PRINT_PATH = os.path.join(KDP_DIR, "manuscript_print.html")
PDF_PRINT_PATH = os.path.join(KDP_DIR, "manuscript_print.pdf")
HTML_EBOOK_PATH = os.path.join(KDP_DIR, "manuscript.html")

# Define SVG diagrams to replace ASCII art
SVG_GREENHOUSE = """
<svg viewBox="0 0 500 240" width="100%" height="210" style="background:#fafafa; border:1px solid #ddd; margin:12px 0; display:block;">
    <rect width="100%" height="100%" fill="#fafafa"/>
    <line x1="20" y1="210" x2="480" y2="210" stroke="#666" stroke-width="2"/>
    <line x1="60" y1="210" x2="60" y2="90" stroke="#2c3e50" stroke-width="4"/>
    <line x1="250" y1="210" x2="250" y2="90" stroke="#2c3e50" stroke-width="4"/>
    <line x1="440" y1="210" x2="440" y2="90" stroke="#2c3e50" stroke-width="4"/>
    <line x1="60" y1="90" x2="440" y2="90" stroke="#7f8c8d" stroke-width="3"/>
    <line x1="60" y1="90" x2="155" y2="45" stroke="#2c3e50" stroke-width="2"/>
    <line x1="155" y1="45" x2="250" y2="90" stroke="#2c3e50" stroke-width="2"/>
    <line x1="250" y1="90" x2="345" y2="45" stroke="#2c3e50" stroke-width="2"/>
    <line x1="345" y1="45" x2="440" y2="90" stroke="#2c3e50" stroke-width="2"/>
    <line x1="60" y1="110" x2="440" y2="110" stroke="#7f8c8d" stroke-width="1.5" stroke-dasharray="2,2"/>
    <line x1="60" y1="90" x2="100" y2="110" stroke="#7f8c8d" stroke-width="1"/>
    <line x1="100" y1="110" x2="140" y2="90" stroke="#7f8c8d" stroke-width="1"/>
    <line x1="140" y1="90" x2="180" y2="110" stroke="#7f8c8d" stroke-width="1"/>
    <line x1="180" y1="110" x2="220" y2="90" stroke="#7f8c8d" stroke-width="1"/>
    <line x1="220" y1="90" x2="250" y2="110" stroke="#7f8c8d" stroke-width="1"/>
    <line x1="250" y1="90" x2="290" y2="110" stroke="#7f8c8d" stroke-width="1"/>
    <line x1="290" y1="110" x2="330" y2="90" stroke="#7f8c8d" stroke-width="1"/>
    <line x1="330" y1="90" x2="370" y2="110" stroke="#7f8c8d" stroke-width="1"/>
    <line x1="370" y1="110" x2="410" y2="90" stroke="#7f8c8d" stroke-width="1"/>
    <line x1="410" y1="90" x2="440" y2="110" stroke="#7f8c8d" stroke-width="1"/>
    <line x1="155" y1="45" x2="185" y2="28" stroke="#e74c3c" stroke-width="2"/>
    <line x1="345" y1="45" x2="375" y2="28" stroke="#e74c3c" stroke-width="2"/>
    <text x="175" y="22" font-family="Georgia" font-size="9" fill="#e74c3c" font-weight="bold">Ridge Vents (Open)</text>
    <text x="350" y="75" font-family="Georgia" font-size="9" fill="#2c3e50">Glass Roof</text>
    <text x="110" y="130" font-family="Georgia" font-size="9" fill="#7f8c8d">Lattice Truss Girder</text>
    <text x="260" y="160" font-family="Georgia" font-size="9" fill="#2c3e50">Steel Column</text>
    <text x="250" y="230" font-family="Georgia" font-size="11" fill="#333" text-anchor="middle" font-weight="bold">Venlo Glass Greenhouse Section</text>
</svg>
"""

SVG_SCREEN = """
<svg viewBox="0 0 500 180" width="100%" height="160" style="background:#fafafa; border:1px solid #ddd; margin:12px 0; display:block;">
    <rect width="100%" height="100%" fill="#fafafa"/>
    <line x1="20" y1="30" x2="480" y2="30" stroke="#333" stroke-width="3"/>
    <text x="30" y="24" font-family="Georgia" font-size="9" fill="#333" font-weight="bold">Truss Level</text>
    <line x1="20" y1="65" x2="480" y2="65" stroke="#7f8c8d" stroke-width="1.5" stroke-dasharray="4,4"/>
    <text x="30" y="59" font-family="Georgia" font-size="9" fill="#7f8c8d">Steel Guide Wire / Cable</text>
    <rect x="20" y="65" width="460" height="8" fill="#34495e" opacity="0.85"/>
    <text x="250" y="72" font-family="Georgia" font-size="8.5" fill="#fff" text-anchor="middle">Closed Screen Fabric (Aluminized / Thermal)</text>
    <rect x="20" y="30" width="460" height="35" fill="#3498db" opacity="0.08"/>
    <text x="250" y="50" font-family="Georgia" font-size="9.5" fill="#2980b9" text-anchor="middle" font-style="italic">Dead Air Insulation Buffer (Reduces Heat Loss)</text>
    <line x1="20" y1="125" x2="480" y2="125" stroke="#27ae60" stroke-width="2"/>
    <text x="30" y="120" font-family="Georgia" font-size="9" fill="#27ae60" font-weight="bold">Cultivation Canopy Height</text>
    <path d="M 50 125 Q 60 105 70 125 M 150 125 Q 160 105 170 125 M 250 125 Q 260 105 270 125 M 350 125 Q 360 105 370 125 M 430 125 Q 440 105 450 125" stroke="#2ecc71" stroke-width="2" fill="none"/>
    <text x="250" y="165" font-family="Georgia" font-size="11" fill="#333" text-anchor="middle" font-weight="bold">Thermal Screen Installation Profile</text>
</svg>
"""

SVG_BOILER = """
<svg viewBox="0 0 540 190" width="100%" height="160" style="background:#fafafa; border:1px solid #ddd; margin:12px 0; display:block;">
    <rect width="100%" height="100%" fill="#fafafa"/>
    <rect x="20" y="45" width="90" height="70" rx="4" fill="#e74c3c"/>
    <text x="65" y="74" font-family="Georgia" font-size="10.5" fill="#fff" text-anchor="middle" font-weight="bold">BOILER</text>
    <text x="65" y="90" font-family="Georgia" font-size="10.5" fill="#fff" text-anchor="middle" font-weight="bold">(90°C)</text>
    <path d="M 110 65 L 180 65" stroke="#e74c3c" stroke-width="3" fill="none"/>
    <polygon points="155,62 163,65 155,68" fill="#e74c3c"/>
    <text x="145" y="55" font-family="Georgia" font-size="8.5" fill="#e74c3c" text-anchor="middle">Supply (90°C)</text>
    <polygon points="180,55 180,75 195,65" fill="#2980b9" stroke="#2c3e50" stroke-width="1"/>
    <polygon points="210,55 210,75 195,65" fill="#2980b9" stroke="#2c3e50" stroke-width="1"/>
    <polygon points="195,65 195,85 195,65" fill="#2980b9" stroke="#2c3e50" stroke-width="1"/>
    <circle cx="195" cy="65" r="3" fill="#f39c12"/>
    <text x="195" y="45" font-family="Georgia" font-size="8.5" fill="#2c3e50" text-anchor="middle" font-weight="bold">3-Way Valve</text>
    <path d="M 210 65 L 340 65" stroke="#f39c12" stroke-width="3" fill="none"/>
    <polygon points="275,62 283,65 275,68" fill="#f39c12"/>
    <text x="275" y="55" font-family="Georgia" font-size="8.5" fill="#f39c12" text-anchor="middle">Mixed Rail (40°C)</text>
    <circle cx="310" cy="65" r="10" fill="#7f8c8d"/>
    <polygon points="306,61 316,65 306,69" fill="#fff"/>
    <text x="310" y="88" font-family="Georgia" font-size="8.5" fill="#7f8c8d" text-anchor="middle">Pump</text>
    <rect x="360" y="35" width="150" height="110" rx="3" fill="none" stroke="#d35400" stroke-width="2" stroke-dasharray="3,2"/>
    <text x="435" y="90" font-family="Georgia" font-size="10.5" fill="#d35400" text-anchor="middle" font-weight="bold">Floor Heating Rails</text>
    <path d="M 435 145 L 435 155 L 195 155 L 195 85" stroke="#2980b9" stroke-width="3" fill="none"/>
    <polygon points="300,152 292,155 300,158" fill="#2980b9"/>
    <text x="310" y="168" font-family="Georgia" font-size="8.5" fill="#2980b9" text-anchor="middle">Return Line (30°C Recycle)</text>
    <path d="M 195 155 L 65 155 L 65 115" stroke="#2980b9" stroke-width="3" fill="none"/>
</svg>
"""

SVG_CURVES = """
<svg viewBox="0 0 500 260" width="100%" height="220" style="background:#fafafa; border:1px solid #ddd; margin:12px 0; display:block;">
    <rect width="100%" height="100%" fill="#fafafa"/>
    <line x1="60" y1="20" x2="60" y2="200" stroke="#ddd" stroke-width="1"/>
    <line x1="60" y1="200" x2="460" y2="200" stroke="#ddd" stroke-width="1"/>
    <line x1="460" y1="20" x2="460" y2="200" stroke="#ddd" stroke-width="1"/>
    <line x1="60" y1="20" x2="460" y2="20" stroke="#ddd" stroke-width="1"/>
    <line x1="60" y1="65" x2="460" y2="65" stroke="#eee" stroke-width="1" stroke-dasharray="2,2"/>
    <line x1="60" y1="110" x2="460" y2="110" stroke="#eee" stroke-width="1" stroke-dasharray="2,2"/>
    <line x1="60" y1="155" x2="460" y2="155" stroke="#eee" stroke-width="1" stroke-dasharray="2,2"/>
    <line x1="160" y1="20" x2="160" y2="200" stroke="#eee" stroke-width="1" stroke-dasharray="2,2"/>
    <line x1="260" y1="20" x2="260" y2="200" stroke="#eee" stroke-width="1" stroke-dasharray="2,2"/>
    <line x1="360" y1="20" x2="360" y2="200" stroke="#eee" stroke-width="1" stroke-dasharray="2,2"/>
    <line x1="60" y1="200" x2="460" y2="200" stroke="#333" stroke-width="2"/>
    <line x1="60" y1="20" x2="60" y2="200" stroke="#333" stroke-width="2"/>
    <text x="260" y="235" font-family="Georgia" font-size="10" fill="#333" text-anchor="middle" font-weight="bold">Valve Lift (%)</text>
    <text x="18" y="110" font-family="Georgia" font-size="10" fill="#333" text-anchor="middle" font-weight="bold" transform="rotate(-90,18,110)">Flow Rate Q (%)</text>
    <text x="60" y="215" font-family="Georgia" font-size="8.5" fill="#555" text-anchor="middle">0%</text>
    <text x="260" y="215" font-family="Georgia" font-size="8.5" fill="#555" text-anchor="middle">50%</text>
    <text x="460" y="215" font-family="Georgia" font-size="8.5" fill="#555" text-anchor="middle">100%</text>
    <text x="50" y="203" font-family="Georgia" font-size="8.5" fill="#555" text-anchor="end">0%</text>
    <text x="50" y="113" font-family="Georgia" font-size="8.5" fill="#555" text-anchor="end">50%</text>
    <text x="50" y="24" font-family="Georgia" font-size="8.5" fill="#555" text-anchor="end">100%</text>
    <line x1="60" y1="200" x2="460" y2="20" stroke="#e74c3c" stroke-width="2.5"/>
    <text x="320" y="90" font-family="Georgia" font-size="9.5" fill="#e74c3c" font-weight="bold">Linear plug</text>
    <path d="M 60 195 C 190 195, 370 150, 460 20" fill="none" stroke="#2980b9" stroke-width="2.5"/>
    <text x="310" y="170" font-family="Georgia" font-size="9.5" fill="#2980b9" font-weight="bold">Equal Percentage</text>
    <text x="250" y="252" font-family="Georgia" font-size="11" fill="#333" text-anchor="middle" font-weight="bold">Flow Characteristic Curves</text>
</svg>
"""

SVG_PH_SENSOR = """
<svg viewBox="0 0 500 180" width="100%" height="150" style="background:#fafafa; border:1px solid #ddd; margin:12px 0; display:block;">
    <rect width="100%" height="100%" fill="#fafafa"/>
    <rect x="220" y="15" width="60" height="95" fill="#e0e0e0" stroke="#555" stroke-width="1.5"/>
    <text x="250" y="11" font-family="Georgia" font-size="8.5" fill="#555" text-anchor="middle">Outer Shield Body</text>
    <path d="M 220 110 C 220 145, 280 145, 280 110" fill="#dff9fb" stroke="#22a6b3" stroke-width="2.5"/>
    <text x="300" y="130" font-family="Georgia" font-size="8.5" fill="#22a6b3" font-weight="bold">Glass Bulb Membrane</text>
    <path d="M 228 110 C 228 135, 272 135, 272 110 Z" fill="#7ed6df" opacity="0.4"/>
    <text x="110" y="125" font-family="Georgia" font-size="8.5" fill="#130cb7" font-weight="bold">Internal Buffer (pH 7)</text>
    <line x1="205" y1="122" x2="232" y2="122" stroke="#130cb7" stroke-width="1"/>
    <line x1="250" y1="10" x2="250" y2="115" stroke="#f39c12" stroke-width="2"/>
    <circle cx="250" cy="115" r="3" fill="#f39c12"/>
    <text x="250" y="70" font-family="Georgia" font-size="8.5" fill="#d35400" font-weight="bold" text-anchor="middle">Ag/AgCl Electrode</text>
    <rect x="277" y="75" width="6" height="12" fill="#f1c40f" stroke="#333" stroke-width="1"/>
    <text x="295" y="85" font-family="Georgia" font-size="8.5" fill="#b7950b" font-weight="bold">Reference Junction</text>
    <text x="250" y="165" font-family="Georgia" font-size="11" fill="#333" text-anchor="middle" font-weight="bold">Glass Electrode pH Sensor Architecture</text>
</svg>
"""

SVG_VENTURI = """
<svg viewBox="0 0 500 180" width="100%" height="160" style="background:#fafafa; border:1px solid #ddd; margin:12px 0; display:block;">
    <rect width="100%" height="100%" fill="#fafafa"/>
    <path d="M 20 50 L 160 50 L 220 75 L 280 75 L 340 50 L 480 50" fill="none" stroke="#2c3e50" stroke-width="2.5"/>
    <path d="M 20 110 L 160 110 L 220 95 L 280 95 L 340 110 L 480 110" fill="none" stroke="#2c3e50" stroke-width="2.5"/>
    <rect x="235" y="95" width="30" height="40" fill="none" stroke="#2c3e50" stroke-width="2.5"/>
    <line x1="40" y1="80" x2="100" y2="80" stroke="#3498db" stroke-width="3"/>
    <polygon points="100,77 108,80 100,83" fill="#3498db"/>
    <text x="70" y="70" font-family="Georgia" font-size="8.5" fill="#3498db" text-anchor="middle">Main Flow (Low Velocity)</text>
    <text x="250" y="66" font-family="Georgia" font-size="8.5" fill="#e74c3c" text-anchor="middle" font-weight="bold">Constriction (High Velocity)</text>
    <line x1="230" y1="85" x2="270" y2="85" stroke="#e74c3c" stroke-width="1.5"/>
    <line x1="250" y1="135" x2="250" y2="105" stroke="#2ecc71" stroke-width="2.5"/>
    <polygon points="247,110 250,102 253,110" fill="#2ecc71"/>
    <text x="290" y="125" font-family="Georgia" font-size="8.5" fill="#27ae60" font-weight="bold">Nutrient Suction</text>
    <text x="250" y="165" font-family="Georgia" font-size="11" fill="#333" text-anchor="middle" font-weight="bold">Venturi Injector Mechanical Dynamics</text>
</svg>
"""

SVG_RECIRCULATION = """
<svg viewBox="0 0 540 130" width="100%" height="110" style="background:#fafafa; border:1px solid #ddd; margin:12px 0; display:block;">
    <rect width="100%" height="100%" fill="#fafafa"/>
    <line x1="40" y1="60" x2="500" y2="60" stroke="#bdc3c7" stroke-width="3"/>
    
    <rect x="20" y="30" width="70" height="50" rx="3" fill="#3498db"/>
    <text x="55" y="60" font-family="Georgia" font-size="8.5" fill="#fff" text-anchor="middle" font-weight="bold">Drainage Pit</text>
    <polygon points="105,57 113,60 105,63" fill="#3498db"/>
    
    <rect x="125" y="30" width="70" height="50" rx="3" fill="#9b59b6"/>
    <text x="160" y="51" font-family="Georgia" font-size="8.5" fill="#fff" text-anchor="middle" font-weight="bold">Sand / Disc</text>
    <text x="160" y="63" font-family="Georgia" font-size="8.5" fill="#fff" text-anchor="middle" font-weight="bold">Filters</text>
    <polygon points="210,57 218,60 210,63" fill="#9b59b6"/>
    
    <rect x="230" y="30" width="70" height="50" rx="3" fill="#e67e22"/>
    <text x="265" y="51" font-family="Georgia" font-size="8.5" fill="#fff" text-anchor="middle" font-weight="bold">UV-C</text>
    <text x="265" y="63" font-family="Georgia" font-size="8.5" fill="#fff" text-anchor="middle" font-weight="bold">Chamber</text>
    <polygon points="315,57 323,60 315,63" fill="#e67e22"/>
    
    <rect x="335" y="30" width="70" height="50" rx="3" fill="#1abc9c"/>
    <text x="370" y="51" font-family="Georgia" font-size="8.5" fill="#fff" text-anchor="middle" font-weight="bold">Ozone</text>
    <text x="370" y="63" font-family="Georgia" font-size="8.5" fill="#fff" text-anchor="middle" font-weight="bold">Reactor</text>
    <polygon points="420,57 428,60 420,63" fill="#1abc9c"/>
    
    <rect x="440" y="30" width="80" height="50" rx="3" fill="#2ecc71"/>
    <text x="480" y="51" font-family="Georgia" font-size="8.5" fill="#fff" text-anchor="middle" font-weight="bold">Irrigation</text>
    <text x="480" y="63" font-family="Georgia" font-size="8.5" fill="#fff" text-anchor="middle" font-weight="bold">Mixing Tank</text>
    
    <text x="270" y="115" font-family="Georgia" font-size="10.5" fill="#333" text-anchor="middle" font-weight="bold">Drainage Water Recirculation Process Flow</text>
</svg>
"""

def parse_markdown_to_html(md_text):
    lines = md_text.split("\n")
    html_lines = []
    
    in_list = False
    in_code = False
    in_table = False
    code_block_lines = []
    
    # Simple markdown inline formatting replacements
    def replace_inline(text):
        # Bold
        text = re.sub(r"\*\*(.*?)\*\*", r"<strong>\1</strong>", text)
        # Markdown links to plain text (remove URLs for print)
        text = re.sub(r"\[(.*?)\]\(file:///.*?\)", r"\1", text)
        text = re.sub(r"\[(.*?)\]\((.*?)\)", r"\1", text)
        # Inline code
        text = re.sub(r"`(.*?)`", r"<code>\1</code>", text)
        return text

    for line in lines:
        stripped = line.strip()
        
        # Handle code block
        if line.startswith("```"):
            if in_code:
                # End of code block
                code_text = "\n".join(code_block_lines)
                
                # Check for ASCII diagrams and replace with SVGs
                if "Vents (Ridge)" in code_text and "Glass Roof" in code_text:
                    html_lines.append(SVG_GREENHOUSE)
                elif "Truss Level" in code_text and "Screen Fabric" in code_text:
                    html_lines.append(SVG_SCREEN)
                elif "Boiler" in code_text and "3-Way Modulating Valve" in code_text:
                    html_lines.append(SVG_BOILER)
                elif "Flow Rate vs Lift Curves" in code_text:
                    html_lines.append(SVG_CURVES)
                elif "Glass Electrode pH Sensor" in code_text:
                    html_lines.append(SVG_PH_SENSOR)
                elif "Main Flow" in code_text and "Constriction" in code_text:
                    html_lines.append(SVG_VENTURI)
                elif "Gutters ---> Drainage Pit" in code_text:
                    html_lines.append(SVG_RECIRCULATION)
                else:
                    # Normal code block (like PLC Structured Text or Modbus CRC Python code)
                    escaped_code = code_text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
                    html_lines.append(f"<pre><code>{escaped_code}</code></pre>")
                
                in_code = False
                code_block_lines = []
            else:
                in_code = True
                code_block_lines = []
            continue
            
        if in_code:
            code_block_lines.append(line)
            continue

        # Handle list
        if stripped.startswith("* ") or stripped.startswith("- "):
            if not in_list:
                html_lines.append("<ul>")
                in_list = True
            content = stripped[2:]
            html_lines.append(f"  <li>{replace_inline(content)}</li>")
            continue
        else:
            if in_list:
                html_lines.append("</ul>")
                in_list = False

        # Handle table
        if stripped.startswith("|"):
            if "---" in stripped:
                # Skip divider line
                continue
            cells = [c.strip() for c in stripped.split("|")[1:-1]]
            if not in_table:
                html_lines.append("<table border='1' style='border-collapse: collapse; width: 100%; margin: 10px 0;'>")
                html_lines.append("  <thead>")
                html_lines.append("    <tr>")
                for cell in cells:
                    html_lines.append(f"      <th style='padding: 8px; background: #f2f2f2;'>{replace_inline(cell)}</th>")
                html_lines.append("    </tr>")
                html_lines.append("  </thead>")
                html_lines.append("  <tbody>")
                in_table = True
            else:
                html_lines.append("    <tr>")
                for cell in cells:
                    html_lines.append(f"      <td style='padding: 8px;'>{replace_inline(cell)}</td>")
                html_lines.append("    </tr>")
            continue
        else:
            if in_table:
                html_lines.append("  </tbody>")
                html_lines.append("</table>")
                in_table = False

        if stripped == "---":
            html_lines.append("<hr style='border: none; border-top: 1px solid #eee; margin: 1.5em 0;'/>")
            continue
            
        # Handle headers
        if stripped.startswith("# "):
            if "Precision Flow Control" in stripped:
                continue
            html_lines.append(f"<h1>{replace_inline(stripped[2:])}</h1>")
        elif stripped.startswith("## "):
            html_lines.append(f"<h2>{replace_inline(stripped[3:])}</h2>")
        elif stripped.startswith("### "):
            html_lines.append(f"<h3>{replace_inline(stripped[4:])}</h3>")
        elif stripped.startswith("#### "):
            html_lines.append(f"<h4>{replace_inline(stripped[5:])}</h4>")
        elif stripped == "":
            html_lines.append("<br/>")
        else:
            # Paragraph
            html_lines.append(f"<p>{replace_inline(stripped)}</p>")
            
    # Clean up unclosed tags
    if in_list:
        html_lines.append("</ul>")
    if in_table:
        html_lines.append("  </tbody>")
        html_lines.append("</table>")
        
    return "\n".join(html_lines)

def compile_and_bake():
    if not os.path.exists(MD_PATH):
        print(f"Error: {MD_PATH} not found.")
        return
        
    print("Reading markdown manuscript...")
    with open(MD_PATH, "r", encoding="utf-8") as f:
        md_text = f.read()
        
    body_content = parse_markdown_to_html(md_text)
    
    # Fetch KaTeX CSS to inline it (for offline rendering)
    print("Fetching KaTeX CSS from CDN...")
    try:
        katex_css_response = requests.get("https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css", timeout=10)
        katex_css = katex_css_response.text
        # Fix relative font URLs in KaTeX CSS to use absolute CDN URLs
        katex_css = katex_css.replace("url(fonts/", "url(https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/fonts/")
    except Exception as e:
        print(f"Warning: Failed to fetch KaTeX CSS, using fallback URL link. Error: {e}")
        katex_css = "@import url('https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css');"

    # Assemble raw html template with improved print styles and margin optimization
    raw_html = f"""<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Precision Flow Control & Greenhouse Automation</title>
    <!-- MathJax handles equations as SVGs directly, no KaTeX CSS link needed -->
    <style>
        /* Document Styles */
        body {{
            font-family: "Georgia", "Times New Roman", serif;
            font-size: 10pt;
            line-height: 1.78;
            color: #000;
            background: #fff;
            margin: 0;
            padding: 0;
        }}
        
        .title-page {{
            page-break-after: always;
            text-align: center;
            padding-top: 2.2in;
            height: 100vh;
            box-sizing: border-box;
        }}
        .title-page h1 {{
            font-size: 26pt;
            font-weight: bold;
            margin-bottom: 15pt;
            line-height: 1.2;
            border: none;
            padding: 0;
            text-transform: none;
        }}
        .title-page .subtitle {{
            font-size: 14pt;
            font-style: italic;
            color: #444;
            margin-bottom: 1.5in;
            line-height: 1.4;
        }}
        .title-page .author {{
            font-size: 12pt;
            font-weight: bold;
        }}
        
        h1 {{
            page-break-before: always;
            font-size: 18pt;
            font-weight: bold;
            margin-top: 0.8in;
            margin-bottom: 15pt;
            text-align: center;
            line-height: 1.2;
            text-transform: uppercase;
        }}
        h2 {{
            font-size: 13pt;
            font-weight: bold;
            margin-top: 20pt;
            margin-bottom: 10pt;
            page-break-after: avoid;
            border-bottom: 1px solid #ddd;
            padding-bottom: 3pt;
        }}
        h3 {{
            font-size: 11pt;
            font-weight: bold;
            margin-top: 14pt;
            margin-bottom: 6pt;
            page-break-after: avoid;
        }}
        h4 {{
            font-size: 10.5pt;
            font-weight: bold;
            font-style: italic;
            margin-top: 12pt;
            margin-bottom: 4pt;
            page-break-after: avoid;
        }}
        
        p {{
            margin-top: 0;
            margin-bottom: 8pt;
            text-align: justify;
            text-indent: 0.25in;
        }}
        p:first-of-type, h1 + p, h2 + p, h3 + p, h4 + p, .title-page p {{
            text-indent: 0;
        }}
        
        pre {{
            background: #f8f8f8;
            border: 0.5pt solid #ccc;
            padding: 8pt;
            font-size: 8pt;
            font-family: "Courier New", Courier, monospace;
            white-space: pre-wrap;
            word-break: break-all;
            margin: 8pt 0;
        }}
        code {{
            font-family: "Courier New", Courier, monospace;
            font-size: 8.5pt;
            background: #f8f8f8;
            padding: 1pt 2pt;
        }}
        
        table {{
            width: 100%;
            border-collapse: collapse;
            margin: 14pt 0;
            font-size: 9pt;
            page-break-inside: avoid;
            break-inside: avoid;
        }}
        th, td {{
            border: 0.5pt solid #666;
            padding: 5pt;
            text-align: left;
        }}
        th {{
            background-color: #f2f2f2;
            font-weight: bold;
        }}
        
        ul, ol {{
            margin-top: 0;
            margin-bottom: 8pt;
            padding-left: 20pt;
        }}
        li {{
            margin-bottom: 3pt;
            text-align: justify;
        }}
        
        svg {{
            page-break-inside: avoid;
            break-inside: avoid;
            margin: 10pt auto;
        }}
        
        /* MathJax Inline & Display SVG Alignment Fixes */
        mjx-container[jax="SVG"][display="true"] {{
            display: block !important;
            margin: 1.2em auto !important;
            text-align: center;
            page-break-inside: avoid;
            break-inside: avoid;
        }}
        mjx-container[jax="SVG"] {{
            display: inline !important;
            line-height: 0;
            position: relative;
            vertical-align: -0.12em !important;
            margin: 0 !important;
        }}
        mjx-container[jax="SVG"] > svg {{
            display: inline-block !important;
            vertical-align: middle !important;
            margin: 0 !important;
        }}
        
        @media print {{
            @page {{
                size: 6in 9in;
                margin-top: 0.85in;
                margin-bottom: 0.85in;
                margin-left: 0.825in; /* Gutter margin */
                margin-right: 0.7in;
            }}
        }}
    </style>
    
    <!-- MathJax Javascript from CDN to render raw LaTeX equations as inline vector SVGs -->
    <script>
        window.MathJax = {{
            tex: {{
                inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
                displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']],
                processEscapes: true
            }},
            svg: {{
                fontCache: 'global'
            }},
            startup: {{
                ready: () => {{
                    MathJax.startup.defaultReady();
                    window.mathjaxReady = true;
                    console.log("MathJax processing completed!");
                }}
            }}
        }};
    </script>
    <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js" id="MathJax-script" async></script>
</head>
<body>
    <!-- Title Page -->
    <div class="title-page">
        <h1>Precision Flow Control &amp;<br>Greenhouse Automation</h1>
        <div class="subtitle">Practical Manual for Smart Farm Maintenance and Operations</div>
        <div class="author">Inwoo Hwang</div>
    </div>
    
    <!-- Main Content -->
    {body_content}
</body>
</html>
"""

    temp_html_path = os.path.join(KDP_DIR, "temp_render.html")
    with open(temp_html_path, "w", encoding="utf-8") as f:
        f.write(raw_html)
        
    print("🚀 Running Playwright to bake Math equations and SVGs...")
    with sync_playwright() as p:
        browser = p.chromium.launch(args=["--disable-web-security"])
        page = browser.new_page()
        page.on("console", lambda msg: print(f"BROWSER CONSOLE: {msg.type}: {msg.text}"))
        page.on("pageerror", lambda err: print(f"BROWSER ERROR: {err}"))
        page.on("requestfailed", lambda req: print(f"BROWSER REQ FAILED: {req.url} - {req.failure}"))
        
        file_url = "file:///" + temp_html_path.replace("\\", "/")
        page.goto(file_url)
        
        # Wait for MathJax to finish processing equations into inline vector SVGs
        page.wait_for_function("window.mathjaxReady === true")
        
        try:
            page.wait_for_load_state("networkidle", timeout=5000)
        except Exception:
            print("Warning: networkidle timeout reached, proceeding with PDF generation.")
            
        # Add a brief delay to ensure layout rendering stability
        page.wait_for_timeout(1000)
        
        # Print the beautiful print PDF with equations rendered as vector SVG
        print("Printing print-ready PDF...")
        page.pdf(
            path=PDF_PRINT_PATH,
            width="6in",
            height="9in",
            margin={
                "top": "0.85in",
                "bottom": "0.855in", # tiny nudge for margin parity
                "left": "0.825in",
                "right": "0.7in"
            },
            display_header_footer=True,
            header_template="<div></div>",
            footer_template="""
                <div style="font-family: Georgia, serif; font-size: 8pt; width: 100%; text-align: center; color: #555;">
                    <span class="pageNumber"></span>
                </div>
            """
        )
        
        # Now, extract the rendered DOM and save it as self-contained static HTML for the eBook
        print("Extracting baked DOM for Kindle eBook...")
        baked_html = page.content()
        
        # Remove the KaTeX script tags since we've already rendered them into HTML/MathML
        baked_html = re.sub(r'<script.*?>.*?</script>', '', baked_html, flags=re.DOTALL)
        
        # Save as the final eBook manuscript
        with open(HTML_EBOOK_PATH, "w", encoding="utf-8") as f:
            f.write(baked_html)
            
        browser.close()
        
    # Clean up temp file
    if os.path.exists(temp_html_path):
        os.remove(temp_html_path)
        
    print("✅ Successfully generated both eBook and Print formats with fully rendered equations and SVGs!")
    print(f"  - eBook: {HTML_EBOOK_PATH}")
    print(f"  - Print PDF: {PDF_PRINT_PATH}")
    
    # Read page count
    with open(PDF_PRINT_PATH, "rb") as f:
        reader = pypdf.PdfReader(f)
        page_count = len(reader.pages)
        print(f"📄 PDF Page Count: {page_count} pages")
        return page_count

if __name__ == "__main__":
    compile_and_bake()
