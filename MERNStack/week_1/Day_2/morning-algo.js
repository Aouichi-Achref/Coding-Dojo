// bubbleSort()
/* 
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
    -> Assume there are no duplicates
*/
//             i
//               j
const nums1 = [5, 3, 4, 2, 1];
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function bubbleSort(nums) {
    var temp=0;
    var x = 0
    for( let i=0;i<=nums.length-2;i++){
        console.log(x++);
        for( let j=0;j<=nums.length-1;j++){
            if(nums[j+1]<nums[j]){
                temp=nums[j+1]
                nums[j+1]=nums[j]
                nums[j]=temp
            } 
        }
    }
    console.log(nums)
}

bubbleSort(nums1)
bubbleSort(nums2)
bubbleSort(nums3)
