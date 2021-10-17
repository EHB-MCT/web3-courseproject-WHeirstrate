import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:english_words/english_words.dart';
import './random_words.dart';

void main() => runApp(DemoApp());

class DemoApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    SystemChrome.setEnabledSystemUIMode(SystemUiMode.edgeToEdge);

    return MaterialApp(
        theme: ThemeData(
            appBarTheme: const AppBarTheme(
          color: Colors.red,
        )),
        home: RandomWords());
  }
}
