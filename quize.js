

// Check whether the year is Leap year or not.

// const Check_LeapYear=(year)=>
// {
//     if(year%4==0 && (year%400==0 || year%100!=0))
//     {
//         return console.log(`${year} is leap year.`);
//     }
//     else
//     {
//         return console.log(`${year} is not leap year.`);
//     }
// }
// Check_LeapYear(2000);
// Check_LeapYear(5000);
// Check_LeapYear(2014);
// Check_LeapYear(2015);
// Check_LeapYear(2016);
// Check_LeapYear(2017);
// Check_LeapYear(2018);




// Perfect Number Check.

// const Perfect_Number=(num)=>
// {
//     let sum=0;
//     for(let i=1;i<=num/2;i++)
//     {
//         if(num%i==0)
//         {
//             sum+=i;
//         }
//     }
    // return console.log(sum);
//     if(num==sum)
//     {
//         return "Perfect Number";
//     }
//     else
//     {
//         return "Not Perfect Number";
//     }
// }
// console.log(Perfect_Number(28));


// Reverse a Number.

// const Reverse_Number=(num)=>
// {
//     let num1 = num;
//     let Reverse = 0;
//     while(num>0)
//     {
//         Reverse = Reverse*10+num%10;
//         num=num - num%10;
//         num/=10;
//     }
//     if(num1==Reverse)
//     {
//         return console.log("This number is polindrome");
//     }
//     else
//     {
//         return console.log("This number is not polindrome");
//     }    // return console.log(Reverse);

// }
// Reverse_Number(123321);



// Questions of Array

// let arr = [22,45,67,87];
// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i]+" ");
// }

// let arr1 = new Array();
// arr1[0]="Ajay";
// arr1[1]="Dhiman";
// arr1[2]="Robin";
// arr1[3]="Kumar";
// for(let i=0;i<arr1.length;i++)
// {
//     console.log(arr1[i]);
// }
// console.log(arr1[2]);
// let space = "";
// let arr2 = new Array("Ajay","Dhiman","Robin","Chirag");
// for(let i=0;i<arr2.length;i++)
// {
//    space+=`${arr2[i]} `;
// }
// console.log(space);



// Q1 . Find the Product.



const Find_Prod=(arr)=>
{
    let product = 1;
    for(let i=0;i<arr.length;i++)
{
    product*=arr[i];
}
return console.log(`The sum of array is ${product}`);
}
let arr = new Array(1,2,3,4,5);
Find_Prod(arr);



// Q2 . Find the sum.



const Find_Sum=(arr1)=>
{
    let Sum = 0;
    for(let i=0;i<arr1.length;i++)
{
    Sum+=arr[i];
}
return console.log(`The sum of array is ${Sum}`);
}
let arr1 = new Array(1,2,3,4,5);
Find_Sum(arr1);



// Q3. Count Occurrences. 

const Find_Count=(num,arr3)=>
{
    let count = 0;
    for(let i=0;i<arr3.length;i++)
    {
        if(num==arr3[i])
        {
            count++;
        }
    }
    return console.log(`The Occurrences of ${num} is ${count}`)
}
let arr3 = new Array(4,3,3,4,3,1,2);
Find_Count(4,arr3);


// Q4. Even Odd. 

const FindEvenOdd=(arr4,B)=>
{
    for(let i=0;i<arr4.length;i++)
    {
        if(arr4[i]%2==0)
        {
            B[0]+=arr4[i];
        }
        else
        {
            B[1]+=arr4[i];
        }
    }
    return console.log(`Sum of Even numbers is ${B[0]} \nSum of Odd numbers is ${B[1]}`);
}
let arr4 = new Array(1,2,3,4,5,6,7);
let B = new Array(0,0);
FindEvenOdd(arr4,B);


// Q5. Find whether the number is present or not 

const  Find_Num=(num,arr2)=>
{
    for(let i=0;i<arr4.length;i++)
    {
        if(num==arr4[i])
        {
            return console.log("Yes");
            break;
        }
    }
    return console.log("No");
}
let arr2 = new Array(1,2,3,4,5,6)
Find_Num(5,arr2);

// Q6. Higher Age 

const highAge=(arr5)=>
{
    for(let i=0;i<arr5.length;i++)
    {
        if(arr5[i]>=18)
        {
            console.log(`Above of 18 = ${arr5[i]}`);
        }
    }
}
let arr5 = new Array(12,25,41,23,21,24,15,13);
highAge(arr5);


// Q7. Increment the Array Elements 

const  Inc_Arr=(arr6)=>
{
    let t;
    for(let i=0;i<arr6.length;i++)
    {
        for(let j=i+1;j<arr6.length;j++)
        {
            if(arr6[i]>arr6[j])
            {
                t=arr6[i];
                arr6[i]=arr6[j]
                arr6[j]=t;
            }
        }
    }
    for(let i=0;i<arr6.length;i++)
    {
        console.log(arr6[i]);
    }
}
let arr6 = new Array(4,5,3,6,9,2,5,6);
Inc_Arr(arr6);

// Q8. Pass or Fail 

const AllPass=(arr7)=>
{
    for(let i=0;i<arr7.length;i++)
    {
        if(arr7[i]<32)
        {
           return console.log("No");
           break;
        }
    }
    return console.log("Yes");
}
let arr7 = new Array(45,35,65,41);
AllPass(arr7);


// Q10. Min and Max 

const Min_Max=(arr8)=>
{
    let max = arr8[0];
    let min = arr8[0];
    for(let i=0;i<arr8.length;i++)
    {
            if(arr8[i]>max)
            {
                max = arr8[i];
            }
            else if(min>arr8[i])
            {
                min = arr8[i];
            }
    }
    return console.log(`The maximum value of this array ${max}\nThe minimun value of this array ${min}`);
}
let arr8 = new Array(21,42,51,1,45,87,666);
Min_Max(arr8);