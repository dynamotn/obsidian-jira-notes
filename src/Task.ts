/**
 * Simple data class that allows for generalization of a task from any TFS
 * Optional fields are only available in Azure for now.
 * @public
 */

export interface Task {
  id: string;
  state: string;
  title: string;
  type: string;
  assignedTo: string;
  link: string;
  desc: string;
  dueDate?: string;
}

export class AzureDevOpsTask implements Task {
  public id: string;
  public state: string;
  public title: string;
  public type: string;
  public assignedTo: string;
  public link: string;
  public desc: string;
  public dueDate?: string;
  public criteria?: string;
  public testScenarios?: string;
  public tags?: string;

  constructor(source: Partial<AzureDevOpsTask>) {
    Object.assign(this, source);
  }
}

export class JiraTask implements Task {
  public id: string;
  public state: string;
  public title: string;
  public type: string;
  public assignedTo: string;
  public link: string;
  public desc: string;
  public dueDate?: string;
  public createdDate?: string;

  constructor(source: Partial<JiraTask>) {
    Object.assign(this, source);
  }
}
