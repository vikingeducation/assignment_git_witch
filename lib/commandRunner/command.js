class Command {
  constructor(query) {
    this.username = "";
    this.subject = "";
    this.query = query;
  }
}

Command["what"] = new Command("getAll");
Command["whats"] = new Command("getStarredRepos");
Command["how many"] = new Command("getCount");

module.exports = Command;
