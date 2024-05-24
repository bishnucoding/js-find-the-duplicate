class FindDuplicate{
    find_duplicate(input){
        let tortoise = input[0];
        let rabbit = input[input[0]];

        while (tortoise != rabbit) {
            tortoise = input[tortoise];
            rabbit = input[input[rabbit]];
        }
        tortoise = 0;

        while(tortoise != rabbit){
            tortoise = input[tortoise];
            rabbit = input[rabbit];
        }
        return tortoise;
    }
}

find_dup = new FindDuplicate()
result = find_dup.find_duplicate([1,2,3,4,5,2])
console.log(result)