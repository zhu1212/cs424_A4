import pandas as pd
df = pd.read_csv('Traffic_Crashes_-_People.csv')


csv_file_path = 'crashes.csv'

# Read the CSV data into a DataFrame
df = pd.read_csv(csv_file_path)

# Convert the DataFrame to a JSON string
json_str = df.to_json(orient='records')

# Print the JSON string
print(json_str)
