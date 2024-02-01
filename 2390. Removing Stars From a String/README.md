# Approach
1. Start from right (end of) "s", looping until "i" = -1.
2. Increase "stars" until "s[i]" is not *.
3.
    a. If "stars" >= 1, then simulate remove action.
    b. Else current character not need remove, add it to "output".