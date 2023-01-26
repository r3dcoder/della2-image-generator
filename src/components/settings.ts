export class Settings {
  private title: string;
  private description: string;

   constructor() {
     
    this.title = "Unleash Your Creativity with Della 2"
    this.description = "Della 2 is the next generation of OpenAI's state-of-the-art image generation technology. With Della 2, you can create high-quality, custom images that are tailored to your specific needs. Whether you need a photo of a happy corgi puppy, a studio light portrait or a longshot of a beautiful landscape, Della 2 can generate it for you in seconds. With its advanced neural network, Della 2 is able to understand and interpret your prompts, resulting in highly realistic and detailed images. Say goodbye to stock photos and hello to unlimited creativity with Della 2. "
  }

  public setTitle(title: string) {
    this.title = title;
  }

  public setDescription(description: string) {
    this.description = description;
  }

  public getDescription(): string {
    return this.description;
  }

  public getTitle(): string {
    return this.description;
  }
}
