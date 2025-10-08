'''
https://leetcode.com/problems/drop-missing-data/submissions/1794833409/
  Runtime 280 ms Beats 72.56% 
  Memory 67.04 MB Beats 64.39% 
'''
import pandas as pd

def dropMissingData(students: pd.DataFrame) -> pd.DataFrame:
  return students.dropna(subset=['name'])
  # return students.loc[students['name'].notna()]