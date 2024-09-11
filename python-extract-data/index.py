import pandas as pd
import json
import os

# Function to extract data from CSV file
def extract_data(file_path):
    if not os.path.exists(file_path):
        return {"error": "File not found"}
    
    try:
        df = pd.read_csv(file_path)
        data = df.to_dict(orient='records')
        return data
    except Exception as e:
        return {"error": str(e)}

# Function to transform data by adding a tax field
def transform_data(data):
    if isinstance(data, dict) and "error" in data:
        return data

    for record in data:
        record['tax'] = record['salary'] * 0.2
    return data

# Function to load data into a JSON file
def load_data(data, output_file):
    if isinstance(data, dict) and "error" in data:
        print(data["error"])
    else:
        with open(output_file, 'w') as f:
            json.dump(data, f, indent=4)
        print(f"Data successfully written to {output_file}")

if __name__ == "__main__":
    # Specify the path to the CSV file
    file_path = 'data.csv'

    # Step 1: Extract data
    data = extract_data(file_path)
    
    # Step 2: Transform data
    transformed_data = transform_data(data)

    # Step 3: Load data into JSON file
    load_data(transformed_data, 'output.json')
