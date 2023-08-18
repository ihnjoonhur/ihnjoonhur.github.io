import csv
import gspread
from decimal import *
import time

NAME = 'May'

file = f"Chase_{NAME}.CSV"

transactions = []

sum = 0

# def chasefin(file):
#     global sum
#     with open(file, mode='r') as csv_file:
#         csv_reader = csv.reader(csv_file)
#         for row in csv_reader:
#             date = row[0]
#             name = row[2]
#             category = row[3]
#             amount = float(row[5])
#             sum += amount
#             transaction = (date, name, category, amount)
#             print(transaction)
#             transactions.append(transaction)
#         print(sum)
def chasefin(file):
    global sum
    transactions = []  # Initialize transactions list here
    with open(file, mode='r') as csv_file:
        csv_reader = csv.reader(csv_file)
        for row in csv_reader:
            date = row[0]
            name = row[2]
            category = row[3]
            amount = float(row[5])
            sum += amount
            transaction = (date, name, category, amount)
            print(transaction)
            transactions.append(transaction)
        print(sum)
    return transactions  # Return the transactions list

sa = gspread.service_account("service_account.json")
sh = sa.open("Finance Tracker")
wks = sh.worksheet(f"{NAME}")

rows = chasefin(file)

for row in rows:
    wks.insert_row([row[0], row[1], row[3], row[2]], 8)
    time.sleep(2)
    
wks.insert_row([1,2,3], 10)