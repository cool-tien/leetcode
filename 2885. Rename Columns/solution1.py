'''
https://leetcode.com/problems/rename-columns/submissions/1794829933/
  Runtime 267 ms Beats 81.25% 
  Memory 65.99 MB Beats 98.87% 
'''
import pandas as pd

def renameColumns(students: pd.DataFrame) -> pd.DataFrame:
  return students.rename(columns={
    'id': 'student_id',
    'first': 'first_name',
    'last': 'last_name',
    'age': 'age_in_years'
  })