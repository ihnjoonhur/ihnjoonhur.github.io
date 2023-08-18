import streamlit as st 
import yfinance as yf

st.write("""
         #Stock App
         """)

tickerSymbol = "GME"
tickerData = yf.Ticker(tickerSymbol)
tickerDF = tickerData.history(period='1d'.
                              start='2019-5-1'
                              end='2023-6-13')

st.line_chart(tickerDF.Open)