# Error Troubleshooting

Here you can find *possible* solutions to errors you may encounter in several places.

Currently, the areas this page supports is:

* **Heck Error Logs** in the BS console (Includes Chroma, Noodle Extensions, etc..)
* **ReMapper terminal errors**

> Note: Before referring to this page if you are using ReMapper, PLEASE exhaust all of your resources on the [ReMapper Wiki](https://github.com/Swifter1243/ReMapper/wiki). Issues that could be resolved just by reading over documentation will *not* be covered here.

If an error you are experiencing isnt covered here, feel free to reach out for support in the [Heck Discord](https://discord.gg/rrZf3kapeh) or [Swifters Discord](https://discord.gg/rDNuHgWbBT).

<hr>

## Heck 

??? failure "example error"
    <hr>

    > **Log Snippet**

    ```
    example snippet
    ```

    > **Explanation**

    *Example Explanation*

    > **Solution**

    *Example Solution*

    <hr>

## ReMapper

??? failure "'Expected double-quoted property in JSON'"
    <hr>

    > **Log Snippet**

    ```
    error: Uncaught (in promise) SyntaxError: Expected double-quoted property name in JSON at position X (line X column X)
    ```

    > **Explanation**

    A JSON file (commonly ``info.dat`` or a difficulty file) contains a property that isn't wrapped in double quotes. (Single quotes or noquotes aren't allowed.)
    <br>
    **Usually this may happen if you tamper with the ``.dat`` without being careful or lack the knowledge of JSON.**

    Correct:
    ```json

      "_beatsPerMinute" : 69

    ```
    Incorrect:
    ```json
      '_beatsPerMinute' : 69
    ```

    > **Solution**
    
    _While this can happen to any JSON file, the log gives us partial information to determining which file this is occuring in._

    **If the log contains ``at loadInfo (...)``, the ``info.dat`` file is causing this error.** <br>

    * At the end of the first line of the error, in parentheses is the location of where the error occured in the ``info.dat`` file. Ex: ``(line 7 column 3)``

    **If the log contains ``at readDifficulty(...)``, a difficulty file is causing this error.** <br>
    
    * While the log doesn't explicitly log the file where this is occuring in, it still provides the location of the error in the JSON (Ex: ``(line 7 column 3)``). <br> Look through each difficulty at the given line number and it should show up.

    **Note: If you are using Visual Studio Code, it *should* highlight the affected file AND property.**

    Lastly, replace any single quotes with double quotes: [``' -> "``].

    <hr>