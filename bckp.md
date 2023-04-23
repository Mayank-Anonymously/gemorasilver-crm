     <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <Card sx={{ p: 3 }}>
                <Stack style={{ flexGrow: 1, flexDirection: "row" }}>
                  <Grid spacing={3} xs={12} md={8} lg={8}>
                    <Grid>
                      <TextField
                        sx={{ marginTop: 3, marginRight: 2 }}
                        fullWidth
                        label="Name*"
                        {...getFieldProps("name")}
                        error={Boolean(touched.name && errors.name)}
                      />
                    </Grid>
                    <TextField
                      sx={{ marginTop: 3, marginRight: 2 }}
                      fullWidth
                      label="email*"
                      {...getFieldProps("email")}
                      error={Boolean(touched.email && errors.email)}
                    />
                    <FormControl fullWidth>
                      <InputLabel
                        sx={{ marginTop: 3, marginLeft: 2 }}
                        id="grouped-native-select"
                      >
                        RollId
                      </InputLabel>
                      <Select
                        labelId="grouped-native-select"
                        id="demo-simple-select"
                        value={rollId}
                        sx={{ marginTop: 3, marginRight: 2 }}
                        label="Age"
                        onChange={handleChangeRollId}
                      >
                        {ROLLS.map((item, index) => (
                          <MenuItem key={index} value={item.value}>
                            {item.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <LoadingButton
                      sx={{ marginTop: 3 }}
                      fullWidth
                      type="submit"
                      variant="contained"
                      size="large"
                      loading={isSubmitting}
                    >
                      Submit
                    </LoadingButton>
                  </Grid>

                  {/* <Grid spacing={3} xs={12} md={8} lg={8}></Grid> */}

                  <Grid spacing={3} xs={12} md={8} lg={8}>
                    <TextField
                      sx={{ marginTop: 3, marginLeft: 2 }}
                      fullWidth
                      label="password*"
                      {...getFieldProps("password")}
                      error={Boolean(touched.password && errors.password)}
                    />
                    <FormControl fullWidth>
                      <InputLabel
                        sx={{ marginTop: 3, marginLeft: 2 }}
                        id="grouped-native-select"
                      >
                        Status
                      </InputLabel>
                      <Select
                        labelId="grouped-native-select"
                        id="demo-simple-select"
                        value={status}
                        sx={{ marginTop: 3, marginLeft: 2 }}
                        label="Age"
                        onChange={handleChangeStatus}
                        fullWidth
                      >
                        {STATUS.map((item, index) => (
                          <MenuItem key={index} value={item.value}>
                            {item.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl fullWidth>
                      <InputLabel
                        sx={{ marginTop: 3, marginLeft: 2 }}
                        id="grouped-native-select"
                      >
                        Usertype
                      </InputLabel>
                      <Select
                        labelId="grouped-native-select"
                        id="demo-simple-select"
                        value={type}
                        sx={{ marginTop: 3, marginLeft: 2 }}
                        label="Age"
                        onChange={handleChangeType}
                        fullWidth
                      >
                        {USERTYPE.map((item, index) => (
                          <MenuItem key={index} value={item.label}>
                            {item.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  {/* <TextField
                    fullWidth
                    multiline
                    minRows={3}
                    maxRows={5}
                    label="Description"
                    {...getFieldProps("description")}
                    error={Boolean(touched.description && errors.description)}
                    helperText={touched.description && errors.description}
                  />

                  <div>
                    <LabelStyle>Content</LabelStyle>
                    <QuillEditor
                      id="post-content"
                      value={values.content}
                      onChange={(val) => setFieldValue("content", val)}
                      error={Boolean(touched.content && errors.content)}
                    />
                    {touched.content && errors.content && (
                      <FormHelperText
                        error
                        sx={{ px: 2, textTransform: "capitalize" }}
                      >
                        {touched.content && errors.content}
                      </FormHelperText>
                    )}
                  </div>

                  <div>
                    <LabelStyle>Cover</LabelStyle>
                    <UploadSingleFile
                      maxSize={3145728}
                      accept="image/*"
                      file={values.cover}
                      onDrop={handleDrop}
                      error={Boolean(touched.cover && errors.cover)}
                    />
                    {touched.cover && errors.cover && (
                      <FormHelperText error sx={{ px: 2 }}>
                        {touched.cover && errors.cover}
                      </FormHelperText>
                    )}
                  </div> */}
                </Stack>
              </Card>
            </Grid>

            {/* <Grid item xs={12} md={4}>
                            <Card sx={{ p: 3 }}>
                                <Grid spacing={3}>
                                    <div>
                                        <FormControlLabel
                                            control={<Switch {...getFieldProps('publish')} checked={values.publish} />}
                                            label="Publish"
                                            labelPlacement="start"
                                            sx={{ mb: 1, mx: 0, width: '100%', justifyContent: 'space-between' }}
                                        />

                                        <FormControlLabel
                                            control={<Switch {...getFieldProps('comments')} checked={values.comments} />}
                                            label="Enable comments"
                                            labelPlacement="start"
                                            sx={{ mx: 0, width: '100%', justifyContent: 'space-between' }}
                                        />
                                    </div>

                                    <Autocomplete
                                        multiple
                                        freeSolo
                                        value={values.tags}
                                        onChange={(event, newValue) => {
                                            setFieldValue('tags', newValue);
                                        }}
                                        options={TAGS_OPTION.map((option) => option)}
                                        renderTags={(value, getTagProps) =>
                                            value.map((option, index) => (
                                                <Chip key={option} size="small" label={option} {...getTagProps({ index })} />
                                            ))
                                        }
                                        renderInput={(params) => <TextField {...params} label="Tags" />}
                                    />

                                    <TextField fullWidth label="Meta title" {...getFieldProps('metaTitle')} />

                                    <TextField
                                        fullWidth
                                        multiline
                                        minRows={3}
                                        maxRows={5}
                                        label="Meta description"
                                        {...getFieldProps('metaDescription')}
                                    />

                                    <Autocomplete
                                        multiple
                                        freeSolo
                                        value={values.tags}
                                        onChange={(event, newValue) => {
                                            setFieldValue('metaKeywords', newValue);
                                        }}
                                        options={TAGS_OPTION.map((option) => option)}
                                        renderTags={(value, getTagProps) =>
                                            value.map((option, index) => (
                                                <Chip key={option} size="small" label={option} {...getTagProps({ index })} />
                                            ))
                                        }
                                        renderInput={(params) => <TextField {...params} label="Meta keywords" />}
                                    />
                                </Grid>
                            </Card>

                            <Stack direction="row" justifyContent="flex-end" sx={{ mt: 3 }}>
                                <Button
                                    fullWidth
                                    type="button"
                                    color="inherit"
                                    variant="outlined"
                                    size="large"
                                    onClick={handleOpenPreview}
                                    sx={{ mr: 1.5 }}
                                >
                                    Preview
                                </Button>
                                <LoadingButton fullWidth type="submit" variant="contained" size="large" loading={isSubmitting}>
                                    Post
                                </LoadingButton>
                            </Stack>
                        </Grid> */}
          </Grid>