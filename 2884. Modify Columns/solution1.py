'''
https://leetcode.com/problems/modify-columns/submissions/1793724348/
  Runtime 262 ms Beats 79.01%
  Memory 66.19 MB Beats 62.70%
'''
import pandas as pd

def modifySalaryColumn(employees: pd.DataFrame) -> pd.DataFrame:
  employees['salary'] *= 2
  return employees