'''
https://leetcode.com/problems/reshape-data-concatenate/submissions/1795921038/
  Runtime 278 ms Beats 91.13%
  Memory 66.79 MB Beats 44.42%
'''
import pandas as pd

def concatenateTables(df1: pd.DataFrame, df2: pd.DataFrame) -> pd.DataFrame:
  return pd.concat([df1, df2], ignore_index=True)