const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function () {
  let counter;

  beforeEach(async function () {
    const Counter = await ethers.getContractFactory("Counter");
    counter = await Counter.deploy();
    await counter.deployed();
  });

  it("should add two numbers", async function () {
    await counter.add(10, 5);
    expect(await counter.getTotal()).to.equal(15);
  });

  it("should subtract two numbers", async function () {
    await counter.subtract(10, 5);
    expect(await counter.getSubtracted()).to.equal(5);
  });

  it("should multiply two numbers", async function () {
    await counter.multiply(10, 5);
    expect(await counter.getMultiplied()).to.equal(50);
  });

  it("should divide two numbers", async function () {
    await counter.divide(10, 5);
    expect(await counter.getDivided()).to.equal(2);
  });

  it("should handle integer overflow", async function () {
    await expect(counter.add(2**256 - 1, 1)).to.be.revertedWith("Integer overflow");
    await expect(counter.multiply(2**256 - 1, 2**256 - 1)).to.be.revertedWith("Integer overflow");
  });

  it("should handle division by zero", async function () {
    await expect(counter.divide(10, 0)).to.be.revertedWith("Division by zero");
  });

  it("should handle negative results", async function () {
    await expect(counter.subtract(5, 10)).to.be.revertedWith("Result is negative");
  });
});
