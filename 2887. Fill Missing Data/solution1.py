'''
https://leetcode.com/problems/fill-missing-data/submissions/1794828948/
  Runtime 271 ms Beats 71.05%
  Memory 65.95 MB Beats 90.49%
'''
import pandas as pd

def fillMissingValues(products: pd.DataFrame) -> pd.DataFrame:
  products['quantity'] = products['quantity'].fillna(0)
  return products