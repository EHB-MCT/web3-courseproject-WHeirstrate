package com.example.prototypeapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.Toast

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        Toast.makeText(this, "test", Toast.LENGTH_SHORT).show()
        loadUser()
    }

    private fun loadUser() {
        val button: Button = findViewById(R.id.addDemoUserBtn)
        button.setOnClickListener {
            Toast.makeText(this, "Test", Toast.LENGTH_SHORT).show()
        }
    }
}