import os
import re

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
MD_PATH = os.path.join(SCRIPT_DIR, "KDP_Smartfarm_Draft_v2.md")
HTML_PATH = os.path.join(SCRIPT_DIR, "manuscript.html")

def parse_markdown_to_html(md_text):
    lines = md_text.split("\n")
    html_lines = []
    
    in_list = False
    in_code = False
    in_table = False
    table_headers = None
    
    # Simple markdown inline formatting replacements
    def replace_inline(text):
        # Bold
        text = re.sub(r"\*\*(.*?)\*\*", r"<strong>\1</strong>", text)
        # Markdown links to plain text
        text = re.sub(r"\[(.*?)\]\(file:///.*?\)", r"\1", text)
        text = re.sub(r"\[(.*?)\]\((.*?)\)", r"\1", text)
        # Inline code
        text = re.sub(r"`(.*?)`", r"<code>\1</code>", text)
        return text

    for line in lines:
        stripped = line.strip()
        
        # Handle code block
        if stripped.startswith("```"):
            if in_code:
                html_lines.append("</code></pre>")
                in_code = False
            else:
                html_lines.append("<pre><code>")
                in_code = True
            continue
            
        if in_code:
            # Escape HTML special chars in code
            escaped = line.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
            html_lines.append(escaped)
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

        # Handle headers
        if stripped.startswith("# "):
            html_lines.append(f"<h1>{replace_inline(stripped[2:])}</h1>")
        elif stripped.startswith("## "):
            html_lines.append(f"<h2>{replace_inline(stripped[3:])}</h2>")
        elif stripped.startswith("### "):
            html_lines.append(f"<h3>{replace_inline(stripped[4:])}</h3>")
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

def compile_manuscript():
    if not os.path.exists(MD_PATH):
        print(f"Error: {MD_PATH} not found.")
        return
        
    with open(MD_PATH, "r", encoding="utf-8") as f:
        md_text = f.read()
        
    body_content = parse_markdown_to_html(md_text)
    
    html_content = f"""<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Precision Flow Control & Greenhouse Automation</title>
    <style>
        body {{
            font-family: Georgia, serif;
            line-height: 1.6;
            margin: 40px auto;
            max-width: 800px;
            padding: 0 20px;
            color: #333;
        }}
        h1 {{
            border-bottom: 2px solid #333;
            padding-bottom: 10px;
            margin-top: 40px;
        }}
        h2 {{
            border-bottom: 1px solid #ddd;
            padding-bottom: 5px;
            margin-top: 30px;
        }}
        h3 {{
            margin-top: 20px;
        }}
        pre {{
            background: #f4f4f4;
            border: 1px solid #ddd;
            padding: 15px;
            overflow-x: auto;
        }}
        code {{
            font-family: Courier, monospace;
            font-size: 0.9em;
        }}
        table {{
            margin: 20px 0;
        }}
    </style>
</head>
<body>
    {body_content}
</body>
</html>
"""
    
    with open(HTML_PATH, "w", encoding="utf-8") as f:
        f.write(html_content)
        
    print(f"✅ Successfully compiled KDP manuscript to Kindle-ready HTML: {HTML_PATH}")

if __name__ == "__main__":
    compile_manuscript()
