'''
  https://leetcode.com/problems/change-data-type/submissions/1793722540/
    Runtime 262 ms Beats 89.77%
    Memory 65.76 MB Beats 99.79%
'''
import pandas as pd

def changeDatatype(students: pd.DataFrame) -> pd.DataFrame:
  students['grade'] = students['grade'].astype(int)
  return students