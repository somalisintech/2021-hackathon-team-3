import 'package:flutter/material.dart';

void main() {
  runApp(const homeScreen());
}


class homeScreen extends StatefulWidget {
  const homeScreen({Key? key}) : super(key: key);

  @override
  _homeScreenState createState() => _homeScreenState();
}

class _homeScreenState extends State<homeScreen> {
  bool togglevis = false;
  bool button1Visible = false;
  bool button2Visible = false;
  bool button3Visible = false;
  bool button4Visible = false;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
  home: Scaffold(
    appBar:AppBar(
      title: Text("Shimbir"),
      backgroundColor: Colors.deepPurple,
    ) ,
body: Column(
  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
  children: [
    Visibility(
      visible: button1Visible,
      child: Card(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            const ListTile(
              leading: Icon(Icons.waves),
              title: Text('A flood has happened!'),
              subtitle: Text("Go to higher ground, it's a lot of water!..."),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: <Widget>[
                TextButton(
                  child: const Text('Aknowledge'),
                  onPressed: () {/* ... */},
                ),
                const SizedBox(width: 8),
                TextButton(
                  child: const Text('Delete'),
                  onPressed: () {/* ... */},
                ),
                const SizedBox(width: 8),
              ],
            ),
          ],
        ),
      ),
    ),
    Visibility(
      visible: button2Visible,
      child: Card(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            const ListTile(
              leading: Icon(Icons.local_fire_department_sharp),
              title: Text('Fire nearby! Danger'),
              subtitle: Text("Go Swimming!..."),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: <Widget>[
                TextButton(
                  child: const Text('Aknowledge'),
                  onPressed: () {/* ... */},
                ),
                const SizedBox(width: 8),
                TextButton(
                  child: const Text('Delete'),
                  onPressed: () {/* ... */},
                ),
                const SizedBox(width: 8),
              ],
            ),
          ],
        ),
      ),
    ),
    Visibility(
      visible: button3Visible,
      child: Card(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            const ListTile(
              leading: Icon(Icons.offline_bolt),
              title: Text('A earth quake happened!'),
              subtitle: Text("Seek shelter immediately!..."),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: <Widget>[
                TextButton(
                  child: const Text('Aknowledge'),
                  onPressed: () {/* ... */},
                ),
                const SizedBox(width: 8),
                TextButton(
                  child: const Text('Delete'),
                  onPressed: () {/* ... */},
                ),
                const SizedBox(width: 8),
              ],
            ),
          ],
        ),
      ),
    ),
    Visibility(
      visible: button4Visible,
      child: Card(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            const ListTile(
              leading: Icon(Icons.healing),
              title: Text('Armed Forced have invaded!'),
              subtitle: Text("Seek safe space!..."),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: <Widget>[
                TextButton(
                  child: const Text('Aknowledge'),
                  onPressed: () {/* ... */},
                ),
                const SizedBox(width: 8),
                TextButton(
                  child: const Text('Delete'),
                  onPressed: () {/* ... */},
                ),
                const SizedBox(width: 8),
              ],
            ),
          ],
        ),
      ),
    ),
  ],
),
    bottomNavigationBar: BottomNavigationBar(
      onTap: (int t){
        if (togglevis == true) {
          togglevis = false;
        } else {
          togglevis = true;
        }
        setState(() {

           button1Visible = togglevis;
           button2Visible = togglevis;
           button3Visible = togglevis;
           button4Visible = togglevis;
        });
      },
      items: const <BottomNavigationBarItem>[
        BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: "Home" ),
        BottomNavigationBarItem(
            icon: Icon(Icons.article),
            label: "Alerts"),
        BottomNavigationBarItem(
            icon: Icon(Icons.account_circle_sharp),
            label: "Profile" )
      ],
    ),
  ),

    );
  }
}

