/**
    O()
    231 ~ 277 ms    (5.12% ~ 57.88%)
    49.7 ~ 50.6 MB  (6.91% ~ 55.70%)

    https://leetcode.com/submissions/detail/844970556/
        Runtime: 232 ms, faster than 55.83% of JavaScript online submissions for Design Parking System.
        Memory Usage: 50.6 MB, less than 6.91% of JavaScript online submissions for Design Parking System.
    https://leetcode.com/submissions/detail/845044043/
        Runtime: 277 ms, faster than 5.12% of JavaScript online submissions for Design Parking System.
        Memory Usage: 49.7 MB, less than 55.70% of JavaScript online submissions for Design Parking System.
    https://leetcode.com/submissions/detail/845044234/
        Runtime: 231 ms, faster than 57.88% of JavaScript online submissions for Design Parking System.
        Memory Usage: 50.1 MB, less than 19.46% of JavaScript online submissions for Design Parking System.

 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
 var ParkingSystem = function(big, medium, small) {
    this.parking = [-1, big, medium, small];
    
    return this;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    this.parking[carType]--;
    
    return this.parking[carType] >= 0;
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */