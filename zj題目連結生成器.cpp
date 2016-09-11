#include <iostream>
#include <string>
using namespace std;

int main() {
	string a, b;
	string x = "<li><a href=\"https://zerojudge.tw/ShowProblem?problemid=";
	string y = "</a></li>";
	while (cin >> a){
		getline(cin, b);
		cout << x << a << "\">" << a << '.' << b << y << endl;
	}
}