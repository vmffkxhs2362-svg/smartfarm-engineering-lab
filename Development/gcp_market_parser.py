import os
import json
import base64
from datetime import datetime, timedelta
# In GCP environment, we need to install requests and PyGithub
import requests
from github import Github

# ==========================================
# 📊 GCP Market Data Aggregator (Zero-Cost)
# Target: EU Tomato, EU Cucumber, EU Sweet Pepper, EU Natural Gas (TTF)
# Deployment: Google Cloud Functions (Triggered by Cloud Scheduler daily)
# ==========================================

# 1. Configuration & Secrets
# Set these in GCP Cloud Function Environment Variables
GITHUB_TOKEN = os.environ.get("GITHUB_TOKEN", "your_github_personal_access_token")
REPO_NAME = os.environ.get("GITHUB_REPO", "vmffkxhs2362-svg/smartfarm-engineering-lab")
file_path = "data/market_prices.json"

def get_dummy_trend(base_price, volatility, days=30):
    """
    Temporary placeholder for real API calls (e.g. World Bank, Tridge, FAO).
    In production, replace this with actual requests.get() logic.
    """
    import random
    data = []
    current_price = base_price
    start_date = datetime.now() - timedelta(days=days)
    for i in range(days):
        date_str = (start_date + timedelta(days=i)).strftime("%Y-%m-%d")
        current_price += random.uniform(-volatility, volatility)
        data.append({"date": date_str, "price": round(current_price, 2)})
    return data

def aggregate_market_data():
    """
    Main aggregator function pulling from various APIs.
    """
    print("Fetching global market data...")
    
    # 1. Fetch EU Tomato Wholesale Price (€/kg)
    # URL: https://agridata.ec.europa.eu/extensions/DataPortal/agricultural_markets.html
    # Dummy mock for demonstration
    tomato_data = get_dummy_trend(2.40, 0.1)

    # 2. Fetch EU Cucumber Wholesale Price (€/kg)
    cucumber_data = get_dummy_trend(1.20, 0.05)

    # 3. Fetch EU Sweet Pepper Wholesale Price (€/kg)
    pepper_data = get_dummy_trend(3.10, 0.15)

    # 4. Fetch Natural Gas TTF (€/MWh) - Energy Impact
    gas_data = get_dummy_trend(35.0, 2.0)

    compiled_json = {
        "last_updated": datetime.now().strftime("%Y-%m-%d %H:%M:%S UTC"),
        "currency": "EUR",
        "market": "European Union (EU)",
        "datasets": {
            "tomato": {
                "name": "Tomato (Round)",
                "unit": "€/kg",
                "color": "#ef4444",
                "data": tomato_data
            },
            "cucumber": {
                "name": "Cucumber",
                "unit": "€/kg",
                "color": "#10b981",
                "data": cucumber_data
            },
            "pepper": {
                "name": "Sweet Pepper",
                "unit": "€/kg",
                "color": "#eab308",
                "data": pepper_data
            },
            "natural_gas": {
                "name": "Natural Gas (Dutch TTF)",
                "unit": "€/MWh",
                "color": "#3b82f6",
                "data": gas_data
            }
        }
    }
    
    return json.dumps(compiled_json, indent=2)

def push_to_github(json_content):
    """
    Pushes the generated JSON string to the GitHub repository directly.
    Zero-Cost static hosting backend logic.
    """
    if GITHUB_TOKEN == "your_github_personal_access_token":
        print("[WARNING] GITHUB_TOKEN not set. Running in dry-run mode.")
        print(json_content[:500] + "...\n")
        return

    g = Github(GITHUB_TOKEN)
    repo = g.get_repo(REPO_NAME)
    
    commit_message = f"chore: auto-update global market prices ({datetime.now().strftime('%Y-%m-%d')})"
    
    try:
        # Check if file exists to update
        contents = repo.get_contents(JSON_PATH)
        repo.update_file(contents.path, commit_message, json_content, contents.sha)
        print(f"Successfully updated {JSON_PATH} on GitHub.")
    except Exception as e:
        # File doesn't exist, create it
        repo.create_file(JSON_PATH, commit_message, json_content)
        print(f"Successfully created {JSON_PATH} on GitHub.")

def cloud_function_entrypoint(request):
    """
    Entry point for Google Cloud Functions (HTTP Trigger).
    """
    json_data = aggregate_market_data()
    push_to_github(json_data)
    return "Market data successfully updated and pushed to GitHub.", 200

if __name__ == "__main__":
    # Local execution testing
    print("Starting local test run...")
    data = aggregate_market_data()
    push_to_github(data)
