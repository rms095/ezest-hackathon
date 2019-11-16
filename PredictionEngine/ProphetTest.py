import pandas as pd
from fbprophet import Prophet

df = pd.read_csv("./test.csv")

m = Prophet()
m.fit(df)
future = m.make_future_dataframe(periods=365)
future.tail()
