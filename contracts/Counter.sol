// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Counter{
    uint256 private total;
    uint256 private subtracted;
    uint256 private multiplied;
    uint256 private divided;

    function add(uint256 x, uint256 y) public {
    require(x == 0 || y == 0 || x + y > x, "Integer overflow");
    total = x + y;
}

    function subtract(uint256 x, uint256 y) public {
        require(x >= y, "Result is negative");
        subtracted = x - y;
    }

    function multiply(uint256 x, uint256 y) public {
        require(x == 0 || y == 0 || (x * y) / y == x, "Integer overflow");
        multiplied = x * y;
    }

    function divide(uint256 x, uint256 y) public {
        require(y != 0, "Division by zero");
        divided = x / y;
    }

    function getTotal() public view returns (uint256) {
        return total;
    }

    function getSubtracted() public view returns (uint256) {
        return subtracted;
    }

    function getMultiplied() public view returns (uint256) {
        return multiplied;
    }

    function getDivided() public view returns (uint256) {
        return divided;
    }

}