class solution:
    def printnumbers(self, current,n):
        if current > n :
            return
        
        self.printnumbers(current+1,n)
        print(current ,end=' ')
if __name__ == "__main__":
    obj = solution()
    N = int(input("Enter the number of times to print: "))
    current = 1
    obj.printnumbers(current, N)