#include<stdio.h>

int main(){
    int arr[] = {2,5,10,7,9};
    int largest = arr[1];
    int secLargest = arr[0];

    for(int i = 0; i < 5; i++ ){
        if(largest < arr[i]){
            secLargest = largest;;
            largest = arr[i];
        } else if(secLargest < arr[i]){
            secLargest = arr[i];
        }
    }
    printf("Second Largest Number is : %d ", secLargest);
    return 0;
}