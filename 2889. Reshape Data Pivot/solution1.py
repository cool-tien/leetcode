'''
https://leetcode.com/problems/reshape-data-pivot/submissions/1795926313/
  Runtime 303 ms Beats 67.20%
  Memory 67.66 MB Beats 49.35%
'''
import pandas as pd

def pivotTable(weather: pd.DataFrame) -> pd.DataFrame:
  return weather.pivot(index='month', columns='city', values='temperature')