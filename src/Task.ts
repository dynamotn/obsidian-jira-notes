
/**
   * Simple data class that allows for generalization of a task from any TFS
   * Optional fields are only available in Azure for now.
   * @public
   */
export class Task {
  public id: string;
  public state: string;
  public title: string;
  public type: string;
  public assignedTo: string;
  public link: string;
  public desc: string;
  public criteria?: string;
  public testScenarios?: string;
  public createdDate?: string;
  public dueDate?: string;
  public tags?: string;

  constructor(args) {
    this.id = args.id;
    this.state = args.state;
    this.title = args.title;
    this.type = args.type;
    this.assignedTo = args.assignedTo;
    this.link = args.link;
    this.desc = args.desc;
    this.criteria = args.criteria ?? null;
    this.testScenarios = args.testScenarios ?? null;
    this.createdDate = args.createdDate ?? null;
    this.dueDate = args.dueDate ?? null;
    this.tags = args.tags ?? null;
  }
}
