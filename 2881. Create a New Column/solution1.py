'''
https://leetcode.com/problems/create-a-new-column/submissions/1794821971/
  Runtime 256 ms Beats 90.28%
  Memory 66.05 MB Beats 76.95%
'''
import pandas as pd

def createBonusColumn(employees: pd.DataFrame) -> pd.DataFrame:
  employees['bonus'] = employees['salary'] * 2
  return employees