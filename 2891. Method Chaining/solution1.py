'''
https://leetcode.com/problems/method-chaining/submissions/1795919922/
  Runtime 277 ms Beats 83.95%
  Memory 67.28 MB Beats 34.50%
'''
import pandas as pd

def findHeavyAnimals(animals: pd.DataFrame) -> pd.DataFrame:
  return animals.loc[animals['weight'] >= 100].sort_values(by='weight', ascending=False)[['name']]