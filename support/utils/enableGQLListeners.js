/**
 * Adds cypress listeners to our server gql queries and mutations.  Returns actual server data, not mocked data.
 *
 * Allows us to use cy.wait('@<gql/<queryOrMutationName>') where <queryOrMutationName> is the name of the listener.
 *
 * Ex: cy.wait("@gql/getHomePage")
 */

const gqlQueries = [
  'ActivateUserMutation',
  'AddRoleToUserMutation',
  'AddTeamMembersMutation',
  'AnnotationsCardQuery',
  'ApiExplorerGraphiqlPageQuery',
  'ApiExplorerQuery',
  'ApiKeysPageQuery',
  'AppHeaderQuery',
  'ApplyMetricFiltersButtonQueryNew',
  'AllBoardsQuery',
  'BoardPageQuery',
  'BoardsLogViewMutation',
  'BoardsIFavoritedQuery',
  'BoardFilterPresetsQuery',
  'CreateAnnotationMutation',
  'CreateApiKeyMutation',
  'CreateLatestMetricChange',
  'CreatePercentChange',
  'CreateMqlQuery',
  'CreateQuestionMutation',
  'CreateQuestionMutationNew',
  'CreateQuestionReplyMutation',
  'CreateBoardMutationNew',
  'DeactivateUserMutation',
  'DeleteAnnotationMutation',
  'DeleteMetricCollectionMutation',
  'DeleteQuestionMutation',
  'DeleteBoard',
  'DeleteBoardNew',
  'EditAnnotationMutation',
  'ExploreSavedQueryQuery',
  'FetchDimensionNames',
  'FavoriteBoardMutation',
  'FetchDimensionValues',
  'FetchMqlQueryLog',
  'FetchMqlQueryLogs',
  'FetchMqlTimeSeries',
  'FetchMetricMaxGranularity',
  'FetchMetricIdByMetricNameQuery',
  'FetchDisplayNameByMetricNameQueryNew',
  'FetchMqlQueryFiltersFromDbIdQuery',
  'HomePageAnnotationsQuery',
  'InstallPageQuery',
  'InviteUsersMutation',
  'MetricCollectionCreateMutation',
  'MetricCollectionQuery',
  'MetricCollectionUpadateMutation',
  'MetricsUpdateMetadataMutation',
  'MetricCollectionsQuery',
  'MetricChartNewQuery',
  'MetricSearchQuery',
  'MetricSearchResultMetricSubscribersQuery',
  'MetricsAddDescriptionMutation',
  'OrgMetricsApproveMutation',
  'MetricsAutocompleteQuery',
  'MetricSubscriptionsQuery',
  'MetricsSearchBoxQuery',
  'MetricSearchResultsQueryNew',
  'MetricSearchResultMetricOwnersQuery',
  'MetricSearchFiltersQueryNew',
  'MetricSavedQueriesQuery',
  'MetricChartCardQuery',
  'ModelQuery',
  'MqlServerUrl',
  'NewSavedQueryDeactivateMutation',
  'OktaConnectionQuery',
  'OrgMetricsUpdateMetadataMutation',
  'PermissionsContextQuery',
  'PopularMetricCollectionsQuery',
  'PopularTeamsQuery',
  'PopularBoardsQuery',
  'QuestionItemWithReplyQuery',
  'QuestionCardQuery',
  'RemoveRoleFromUserMutation',
  'RevokeApiKey',
  'RecentlyViewedBoardsQuery',
  'SavedQueriesForMetricQuery',
  'SavedQueryCreateMutation',
  'SavedQueryQuery',
  'SelectMetricSearchResultsQuery',
  'SelectSavedQuerySearchResultsQuery',
  'TeamSetMemberAdminStatusMutation',
  'TeamSettingsPageQuery',
  'TeamsAssignAsMetricOwnerMutation',
  'TeamsLogViewMutation',
  'TeamsRemoveAsMetricOwnerMutation',
  'TopCompanyMetricsQuery',
  'UnfavoriteBoardMutation',
  'UnlikeReplyMutation',
  'UpdateMetricOwnersMutation',
  'UpdateQuestionMutation',
  'UpdateTeamMutation',
  'UseCreateTeamMutation',
  'UseCreateUserMutation',
  'UseLikeOrUnlikeQuestionReplyMutation',
  'UseLikeQuestionMutation',
  'UseMetricAnnotationsQuery',
  'UseMetricPageQuestionsQuery',
  'UseMetricPageQuery',
  'UseMqlQueryLogDetailQuery',
  'UseOnboardingTasksQuery',
  'UseRemoveTeamMemberMutation',
  'UseSettingsPanelQuery',
  'UserSettingsQuery',
  'UseTeamMetricCollectionsQuery',
  'UseTeamMetricsQuery',
  'UseUnlikeQuestionMutation',
  'UseUpdateUserMutation',
  'UseUserCollectionsQuery',
  'UseUserTeamsQuery',
  'UserManagementPageQuery',
  'UserTeamsCollectionsQuery',
  'UseMetricPageRightPanelQuery',
  'UserAndTeamAutocompleteQuery',
  'UpdateQuestionMutationNew',
  'UpdateOrgMetricOwnersMutation',
  'Version',
];

const enableGQLListeners = () => {
  cy.intercept('POST', '/graphql', (req) => {
    if (req.body.query) {
      gqlQueries.forEach((queryName) => {
        if ((req.body || {}).operationName === queryName) {
          console.log('gql/queryName', `gql/${queryName}`);
          req.alias = `gql/${queryName}`;
        }
      });
    }
  });
};

export default enableGQLListeners;
