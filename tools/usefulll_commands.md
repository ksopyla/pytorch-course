

Poetry update only dev dependencies

```powershell
poetry update --only=dev 
```

Export dependencies to requirements.txt

```bash
# Use the older syntax that we know works in your terminal
poetry export --format=requirements.txt --only dev --without-hashes > requirements-dev.txt
```