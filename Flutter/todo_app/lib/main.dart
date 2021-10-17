import 'dart:developer';

import 'api.dart';

import 'package:flutter/material.dart';
//import 'package:http/http.dart' as http;

void main() => runApp(MyEurope());

class MyEurope extends StatefulWidget {
  @override
  _EuropeState createState() => _EuropeState();
}

class _EuropeState extends State<MyEurope> {
  late Future<List> _loadedData;

  @override
  void initState() {
    super.initState();
    _loadedData = fetchData();
    log(_loadedData.toString());
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'My Europe App',
      theme: ThemeData(primaryColor: Colors.amber[600]),
      home: Scaffold(
        appBar: AppBar(
          title: const Text('My Europe'),
        ),
        body: SafeArea(
            child: _loadedData
                ? Center(
                    child: ElevatedButton(
                      child: const Text('Get Started'),
                      onPressed: () => log('hallo'),
                    ),
                  )
                : ListView.builder(
                    itemBuilder: (BuildContext context, index) {
                      return ListTile(
                        title: Text(_loadedData[index]['title']),
                      );
                    },
                  )),
      ),
    );
  }
}
