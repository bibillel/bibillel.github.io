// Vinext explicitly calls process.exit(0) after a successful build. On Windows,
// that can interrupt native async-handle cleanup. Let Node drain naturally on
// success; preserve every non-zero exit and every thrown compilation error.
const exit = process.exit.bind(process);
if (process.platform === 'win32') {
  process.exit = (code) => {
    if (code === 0) { process.exitCode = 0; return; }
    return exit(code);
  };
}
process.argv = [process.argv[0], 'vinext', 'build'];
await import('../node_modules/vinext/dist/cli.js');
