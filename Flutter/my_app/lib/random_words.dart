import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';

class RandomWords extends StatefulWidget {
  @override
  RandomWordsState createState() => RandomWordsState();
}

class RandomWordsState extends State<RandomWords> {
  final _randomWordPairs = <WordPair>[];
  final _savedWordPairs = <WordPair>{};

  Widget _buildList() {
    return ListView.builder(
        padding: const EdgeInsets.all(16),
        itemBuilder: (context, item) {
          if (item.isOdd) return const Divider();

          final index = item ~/ 2;

          if (index >= _randomWordPairs.length) {
            _randomWordPairs.addAll(generateWordPairs().take(10));
          }

          return _itemRow(_randomWordPairs[index]);
        });
  }

  Widget _itemRow(WordPair wordPair) {
    final _alreadySavedWordPair = _savedWordPairs.contains(wordPair);
    return ListTile(
      title: Text(
        wordPair.asPascalCase,
        style: const TextStyle(
          fontSize: 18,
        ),
      ),
      trailing: Icon(
        _alreadySavedWordPair ? Icons.favorite : Icons.favorite_border,
        color: _alreadySavedWordPair ? Colors.red : Colors.blue,
      ),
      onTap: () {
        setState(() {
          _alreadySavedWordPair
              ? _savedWordPairs.remove(wordPair)
              : _savedWordPairs.add(wordPair);
        });
      },
    );
  }

  void _pushLiked() {
    Navigator.of(context)
        .push(MaterialPageRoute(builder: (BuildContext context) {
      final Iterable<ListTile> _tiles =
          _savedWordPairs.map((WordPair wordPair) {
        return ListTile(
          title: Text(
            wordPair.asPascalCase,
            style: const TextStyle(fontSize: 18),
          ),
          trailing: const Icon(Icons.highlight_remove_outlined),
          onTap: () {
            _savedWordPairs.remove(wordPair);
            Navigator.of(context).pop();
            _pushLiked();
          },
        );
      });

      final List<Widget> _dividedPairs = ListTile.divideTiles(
        tiles: _tiles,
        context: context,
      ).toList();

      return Scaffold(
        appBar: AppBar(
          title: const Text("Liked WordPairs"),
          centerTitle: true,
        ),
        body: ListView(
          children: _dividedPairs,
        ),
      );
    }));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('WordPair Generator'),
        centerTitle: true,
        actions: <Widget>[
          IconButton(onPressed: _pushLiked, icon: const Icon(Icons.list))
        ],
      ),
      body: _buildList(),
    );
  }
}
