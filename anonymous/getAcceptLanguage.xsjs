$.response.contentType = "text/plain";var applicationLanguage = $.session.language;$.response.headers.set("Content-Language", applicationLanguage);$.response.setBody("applicationLanguage: " + applicationLanguage);