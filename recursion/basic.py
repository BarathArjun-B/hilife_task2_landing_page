class solution:
    def printNames(self,name,count,n):
        if count == n:
            return
        print(name)
        self.printNames(name, count+1,n)
if __name__ == "__main__":
    obj = solution()
    N =int(input("Enter the number of times"))
    name = input("Enter the name :")
    obj.printNames(name, 0, N)







