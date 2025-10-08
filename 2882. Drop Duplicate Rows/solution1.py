'''
https://leetcode.com/problems/drop-duplicate-rows/submissions/1794836584/
  Runtime 268 ms Beats 78.48% 
  Memory 66.79 MB Beats 78.95% 
'''
import pandas as pd
# unique_emails = customers['email'].unique()
def dropDuplicateEmails(customers: pd.DataFrame) -> pd.DataFrame:
  return customers.drop_duplicates(subset=['email'])