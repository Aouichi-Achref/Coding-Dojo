class BankAccount:
    
    def __init__(self,int_rate,balance): 
        self.int_rate=int_rate
        self.balance=balance
        # your code here! (remember, instance attributes go here)
        # don't worry about user info here; we'll involve the User class soon
    def deposit(self, amount):
        self.balance+=amount
        return self

    def withdraw(self, amount):
        if(self.balance<amount):
            print("Insufficient funds: Charging a $5 fee")
        else:
            self.balance-=amount
        return self

    def display_account_info(self):
        print(f"Balance: {self.balance}$")
        return self
        
    def yield_interest(self):
        if(self.balance>=0):
            self.balance*=self.int_rate
        return self
    
account1=BankAccount(0.75,500)
account2=BankAccount(0.99,800)

account1.deposit(20).deposit(20).deposit(20).withdraw(60).yield_interest()
account1.display_account_info()

account2.deposit(20).deposit(20).withdraw(10).withdraw(10).withdraw(10).withdraw(10).yield_interest()
account2.display_account_info()

