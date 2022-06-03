export default interface Links {
  readonly patch: {
    readonly small: Nullable<string>;
    readonly large: Nullable<string>;
  };
  readonly reddit: {
    readonly campaign: Nullable<string>;
    readonly launch: Nullable<string>;
    readonly media: Nullable<string>;
    readonly recovery: Nullable<string>;
  };
  readonly flickr: {
    readonly small: Array<string>;
    readonly original: Array<string>;
  };
  readonly presskit: Nullable<string>;
  readonly webcast: Nullable<string>;
  readonly youtube_id: Nullable<string>;
  readonly article: Nullable<string>;
  readonly wikipedia: Nullable<string>;
}
