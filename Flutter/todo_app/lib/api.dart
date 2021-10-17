import 'dart:convert';
import 'dart:developer';

import 'package:http/http.dart' as http;

Future<List> fetchData() async {
  final res =
      await http.get(Uri.parse('https://jsonplaceholder.typicode.com/albums'));
  log(jsonDecode(res.body).toString());
  return jsonDecode(res.body);
}
