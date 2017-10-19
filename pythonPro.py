
import sys;


def MyFun():
    print "First Function!";

def MyFun2():
    print "Second Function!";

if __name__ == "__main__":
    word = sys.stdin.readlines();
    if word[0]=="fun1":
        MyFun();
    else:
        MyFun2();
