function printName(name, age) {
    console.log("Hello " + name + ", " + age + " years old")
}
printName("Shimo", 28)
function printSum(num1, num2) {
    console.log("Sum of " + num1 + " and " + num2 + " is " + (num1 + num2))
}
printSum(10, 15)
function checkOdd(num) {
    if (num % 2 == 0) {
        console.log(num + " is even")
    }
    else {
        console.log(num + " is odd")
    }
}
checkOdd(19)
function printMax(array) {
    console.log("Max number in " + array + " is " + Math.max(...array))
}
printMax([4, 2, 6, 8, 1, 3, 5, 9])
function printSumInArray(array) {
    let sum = 0
    for (const i of array) {
        sum += i;
    }
    console.log("Sum of " + array + " is " + sum)
}
printSumInArray([4, 2, 6, 8, 1, 3, 5, 9])
function countElementInArray(array) {
    let count = 0
    for (const i of array) {
        if (i > 10) {
            count += 1
        }
    }
    console.log("Number of numbers in " + array + " greater than 10 is " + count)
}
countElementInArray([4, 12, 16, 8, 1, 33, 5, 9])
function reverseArray(array) {
    console.log("Reverse array of " + array + " is " + array.reverse())
}
reverseArray([4, 2, 6, 8, 1, 3, 5, 9])
function countPositiveInArray(array) {
    let positives = []
    for (const i of array) {
        if (i > 0)
            positives.push(i)
    }

    console.log("Postive numbers of " + array + " is " + positives)
}
countPositiveInArray([4, -12, -16, 8, 1, -33, 5, 9])
function countAppearInArray(array, number) {
    let count = 0
    for (const i of array) {
        if (i == number)
            count += 1
    }

    console.log("Times " + number + " appears in " + array + " is " + count)
}
countAppearInArray([4, -12, -16, 8, 1, -33, 4, 9], 4)
function addElement(name, array) {
    array.push(name)
    console.log("Name list after add " + name + ": " + array)

}
function editElement(name1, name2, array) {

    array[array.indexOf(name2)] = name1

    console.log("Name list after edit " + name2 + " to " + name1 + ": " + array)

}
function deleteElement(name, array) {
    array.splice(array.indexOf(name), 1)
    console.log("Name list after delete " + name + ": " + array)


}
array = ["Nguyễn Văn Tài", "Đỗ Đức Duy", "Lê Hà Thư"]
console.log("Name list: " + array)
addElement("Đỗ Duy Nam", array)
editElement("Nguyễn Bảo Như", "Đỗ Đức Duy", array)
deleteElement("Đỗ Duy Nam", array)