# Data Processing Project

This project processes data from a CSV file, transforms it by adding a tax field, and outputs the results into a JSON file. The project is written in Python and uses the `pandas` library for data manipulation.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

## Requirements

- Python 3.x
- `pandas` library

## Installation

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone <your-repo-url>
cd data-processing
```

### 2. Set Up a Virtual Environment (Optional but Recommended)

It’s recommended to use a virtual environment to manage dependencies:

```bash
python -m venv venv
```

Activate the virtual environment:

- **On Windows**:
  ```bash
  .\venv\Scripts\activate
  ```
- **On macOS/Linux**:
  ```bash
  source venv/bin/activate
  ```

### 3. Install Dependencies

Install the required Python packages using `pip`:

```bash
pip install -r requirements.txt
```

Or you can directly install `pandas`:

```bash
pip install pandas
```

### 4. Prepare the CSV File

Ensure the `data.csv` file is placed in the root directory of the project with the following structure:

```csv
id,name,age,salary
1,John,28,50000
2,Alice,30,60000
3,Bob,22,45000
4,Eve,35,70000
```

## Usage

### 1. Run the Data Processing Script

To run the data processing script, execute:

```bash
python data_processing.py
```

### 2. Check the Output

After running the script, a file named `output.json` will be generated in the root directory with the transformed data.

## Project Structure

```plaintext
data-processing/
│
├── venv/                # Virtual environment (optional)
├── data.csv             # CSV file with input data
├── data_processing.py   # Main Python script
├── output.json          # JSON file with output data
└── README.md            # Project instructions
```
