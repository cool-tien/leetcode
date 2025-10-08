'''
https://leetcode.com/problems/select-data/submissions/1794821261/
  Runtime 289 ms Beats 53.20%
  Memory 67.16 MB Beats 32.08%
'''
import pandas as pd

def selectData(students: pd.DataFrame) -> pd.DataFrame:
  return students.loc[students['student_id'] == 101, ['name', 'age']]