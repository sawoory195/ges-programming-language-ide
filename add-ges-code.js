function runGES(code) {
  const output = document.getElementById("output");
  output.innerHTML = "";

  const lines = code.split("\n");

  lines.forEach(rawLine => {
    const line = rawLine.trim();
    if (!line) return;

    // =========================
    // GES+ COMMANDS START HERE
    // =========================

    if (line.startsWith("COMMAND_NAME#")) {
      // TODO:
      // 1. Parse the line
      // 2. Create elements or logic
      // 3. Append to output
    }

    else if (line.startsWith("ANOTHER_COMMAND#")) {
      // TODO: implement command
    }

    // =========================
    // UNKNOWN COMMAND
    // =========================
    else {
      console.warn("Unknown GES+ command:", line);
    }

  });
}
