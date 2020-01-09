const args = process.argv.slice(2);

switch(args[0])
{
    case "--info":
        console.log("This is useless bullshit for test understood material.");
        break;
    case "--help":
        console.log("--info   List some information about this application\n--version Display version\n--status   Display status");
        break;
    case "--version":
        console.log("0.0.1");
        break;
    case "--status":
        console.log("zaebis");
        break;
    default:
        console.log("Invalid argument");
        console.error("something wrong in your argument");
}
