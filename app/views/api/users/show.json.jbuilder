json.session do
  json.current_user do
    json.partial! 'users/user', user: @user
  end
end
json.errors do
  json.session do
    @user.errors.full_messages
  end
end
